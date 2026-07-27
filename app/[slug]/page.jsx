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
import { getOtlandServerGalaPage, getOtlandServerGalaPages } from '@/lib/otland-server-gala-pages';
import { getTopOtservlistServerBySlug, topOtservlistServers } from '@/lib/top-otservlist-servers';
import { getTibiaWorldPage, getTibiaWorldPages } from '@/lib/tibia-world-pages';

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  const params = [
    ...getCuratedPages().map((page) => ({ slug: page.slug })),
    ...getOtServerCuratedPages().map((page) => ({ slug: page.slug })),
    ...getOtlandServerGalaPages().map((page) => ({ slug: page.slug })),
    ...getTibiaWorldPages().map((page) => ({ slug: page.slug })),
    ...topOtservlistServers.map((server) => ({ slug: server.slug })),
  ];
  return Array.from(new Map(params.map((param) => [param.slug, param])).values());
}

export async function generateMetadata({ params }) {
  const page = getCuratedPage(params.slug);
  const generatedServerPage = page ? null : getOtServerCuratedPage(params.slug);
  const otlandServerPage = page || generatedServerPage ? null : getOtlandServerGalaPage(params.slug);
  const worldPage = page || generatedServerPage || otlandServerPage ? null : getTibiaWorldPage(params.slug);
  const server = page || generatedServerPage || otlandServerPage || worldPage ? null : getTopOtservlistServerBySlug(params.slug);
  if (!page && !generatedServerPage && !otlandServerPage && !worldPage && !server) return {};

  if (generatedServerPage) {
    return buildArticleMetadata(generatedServerPage);
  }

  if (worldPage) {
    return buildArticleMetadata(worldPage);
  }

  if (server || otlandServerPage) {
    const serverRecord = server || otlandServerPage;
    const title = buildServerTitle(serverRecord);
    const description = buildServerDescription(serverRecord);

    return {
      title,
      description,
      keywords: makeServerKeywordList(serverRecord),
      alternates: {
        canonical: buildAbsoluteUrl(`/${serverRecord.slug}`),
      },
      openGraph: {
        title,
        description,
        url: buildAbsoluteUrl(`/${serverRecord.slug}`),
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
  const otlandServerPage = page || generatedServerPage ? null : getOtlandServerGalaPage(params.slug);
  const worldPage = page || generatedServerPage || otlandServerPage ? null : getTibiaWorldPage(params.slug);
  const server = page || generatedServerPage || otlandServerPage || worldPage ? null : getTopOtservlistServerBySlug(params.slug);
  if (!page && !generatedServerPage && !otlandServerPage && !worldPage && !server) notFound();

  if (server || otlandServerPage) {
    const serverRecord = server || otlandServerPage;
    const jsonLd = buildServerJsonLd(serverRecord);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ServerDetailClient params={params} initialServer={{ ...serverRecord, canonical_path: `/${serverRecord.slug}` }} serverId={serverRecord.id} />
      </>
    );
  }

  return <CuratedGuideArticle page={page || generatedServerPage || worldPage} />;
}
