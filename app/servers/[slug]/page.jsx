import { notFound, permanentRedirect } from 'next/navigation';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getExactMatchPageData } from '@/lib/exact-match-page-data';
import { getServerReviewPage } from '@/lib/server-review-pages';
import { getServerRecordBySlug } from '@/lib/server-records';
import ServerDetailClient from '@/app/server/[id]/ServerDetailClient';

export async function generateMetadata({ params }) {
  const page = getServerReviewPage(params.slug) || getExactMatchPageData(params.slug);
  if (page) return buildArticleMetadata(page);
  const server = await getServerRecordBySlug(params.slug);
  return server ? {
    title: `${server.name} Open Tibia Server`,
    description: server.official_summary || server.description || `Verified directory record for ${server.name}.`,
    alternates: { canonical: `/servers/${server.slug}` },
  } : {};
}

export default async function ServerSlugPage({ params }) {
  const exactMatchPage = getExactMatchPageData(params.slug);
  if (exactMatchPage) {
    permanentRedirect(exactMatchPage.path || `/${params.slug}`);
  }

  const page = getServerReviewPage(params.slug);
  if (page && page.slug !== params.slug) {
    permanentRedirect(`/servers/${page.slug}`);
  }
  if (page) return <CuratedGuideArticle page={page} />;

  const server = await getServerRecordBySlug(params.slug);
  if (!server) notFound();
  if (server.slug !== params.slug) permanentRedirect(`/servers/${server.slug}`);
  return <ServerDetailClient initialServer={server} serverId={server.id} />;
}
