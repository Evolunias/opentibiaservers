import ServerDetailClient from '@/app/server/[id]/ServerDetailClient';
import {
  buildAbsoluteUrl,
  buildServerDescription,
  buildServerJsonLd,
  buildServerTitle,
  getSiteName,
  getSiteUrl,
  makeServerKeywordList,
} from '@/lib/seo';
import { getServerPath } from '@/lib/server-paths';
import { getServerRecordBySlug } from '@/lib/server-records';

export async function generateMetadata({ params }) {
  const server = await getServerRecordBySlug(params.slug);
  const siteUrl = getSiteUrl();

  if (!server) {
    return {
      title: `Server Listing Not Found | ${getSiteName()}`,
      description: 'The requested Open Tibia server listing could not be found.',
      alternates: {
        canonical: `${siteUrl}/servers/${params.slug}`,
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = buildServerTitle(server);
  const description = buildServerDescription(server);
  const keywords = makeServerKeywordList(server);
  const canonical = buildAbsoluteUrl(getServerPath(server));

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: getSiteName(),
      type: 'article',
      images: server.hero_image_url ? [{ url: server.hero_image_url }] : undefined,
    },
    twitter: {
      card: server.hero_image_url ? 'summary_large_image' : 'summary',
      title,
      description,
      images: server.hero_image_url ? [server.hero_image_url] : undefined,
    },
  };
}

export default async function ServerSlugPage({ params }) {
  const server = await getServerRecordBySlug(params.slug);
  const jsonLd = server ? buildServerJsonLd(server) : null;

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <ServerDetailClient params={params} initialServer={server} serverId={server?.id} />
    </>
  );
}
