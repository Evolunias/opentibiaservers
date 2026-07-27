import { notFound } from 'next/navigation';
import ServerDetailClient from '@/app/server/[id]/ServerDetailClient';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import {
  buildAbsoluteUrl,
  buildServerDescription,
  buildServerJsonLd,
  buildServerTitle,
  getSiteName,
  makeServerKeywordList,
} from '@/lib/seo';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getCuratedPage, getCuratedPages } from '@/lib/curated-pages';
import { getOtServerCuratedPage, getOtServerCuratedPages } from '@/lib/otserver-curated-pages';
import { getTopOtservlistServerBySlug, topOtservlistServers } from '@/lib/top-otservlist-servers';
import { getTibiaWorldPage, getTibiaWorldPages } from '@/lib/tibia-world-pages';

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  const params = [
    ...getCuratedPages().map((page) => ({ slug: page.slug })),
    ...getOtServerCuratedPages().map((page) => ({ slug: page.slug })),
    ...getTibiaWorldPages().map((page) => ({ slug: page.slug })),
    ...topOtservlistServers.map((server) => ({ slug: server.slug })),
  ];
  return Array.from(new Map(params.map((param) => [param.slug, param])).values());
}

export async function generateMetadata({ params }) {
  const page = getCuratedPage(params.slug);
  const generatedServerPage = page ? null : getOtServerCuratedPage(params.slug);
  const worldPage = page || generatedServerPage ? null : getTibiaWorldPage(params.slug);
  const server = page || generatedServerPage || worldPage ? null : getTopOtservlistServerBySlug(params.slug);
  if (!page && !generatedServerPage && !worldPage && !server) return {};

  if (generatedServerPage) {
    return buildArticleMetadata(generatedServerPage);
  }

  if (worldPage) {
    return buildArticleMetadata(worldPage);
  }

  if (server) {
    const title = buildServerTitle(server);
    const description = buildServerDescription(server);

    return {
      title,
      description,
      keywords: makeServerKeywordList(server),
      alternates: {
        canonical: buildAbsoluteUrl(`/${server.slug}`),
      },
      openGraph: {
        title,
        description,
        url: buildAbsoluteUrl(`/${server.slug}`),
        siteName: getSiteName(),
        type: 'article',
      },
      twitter: {
        card: 'summary',
        title,
        description,
      },
    };
  }

  return buildArticleMetadata(page);
}

export default async function ExactMatchCuratedPage({ params }) {
  const page = getCuratedPage(params.slug);
  const generatedServerPage = page ? null : getOtServerCuratedPage(params.slug);
  const worldPage = page || generatedServerPage ? null : getTibiaWorldPage(params.slug);
  const server = page || generatedServerPage || worldPage ? null : getTopOtservlistServerBySlug(params.slug);
  if (!page && !generatedServerPage && !worldPage && !server) notFound();

  if (server) {
    const jsonLd = buildServerJsonLd(server);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ServerDetailClient params={params} initialServer={{ ...server, canonical_path: `/${server.slug}` }} serverId={server.id} />
      </>
    );
  }

  return <CuratedGuideArticle page={page || generatedServerPage || worldPage} />;
}
