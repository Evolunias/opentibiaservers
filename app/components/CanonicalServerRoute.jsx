import { notFound, permanentRedirect } from 'next/navigation';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import ServerDetailClient from '@/app/server/[id]/ServerDetailClient';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getServerExcerpt } from '@/lib/server-excerpts';
import { getServerReviewPage } from '@/lib/server-review-pages';
import { getServerRecordBySlug } from '@/lib/server-records';

export async function buildCanonicalServerMetadata(slug) {
  const page = getServerReviewPage(slug);
  if (page) {
    const metadata = buildArticleMetadata({
      ...page,
      path: `/servers/${page.slug}`,
    });
    const excerpt = getServerExcerpt(page, { maxLength: 160 });
    return {
      ...metadata,
      description: excerpt || undefined,
      alternates: { canonical: `/servers/${page.slug}` },
    };
  }

  const server = await getServerRecordBySlug(slug);
  if (!server) return {};
  const excerpt = getServerExcerpt(server, { maxLength: 160 });
  return {
    title: `${server.name} Open Tibia Server`,
    description: excerpt || undefined,
    alternates: { canonical: `/servers/${server.slug}` },
  };
}

export default async function CanonicalServerRoute({ slug }) {
  const page = getServerReviewPage(slug);
  if (page) {
    if (page.slug !== slug) permanentRedirect(`/servers/${page.slug}`);
    return <CuratedGuideArticle page={{ ...page, path: `/servers/${page.slug}` }} />;
  }

  const server = await getServerRecordBySlug(slug);
  if (!server) notFound();
  if (server.slug !== slug) permanentRedirect(`/servers/${server.slug}`);
  return <ServerDetailClient initialServer={server} serverId={server.id} />;
}

export async function LegacyServerRoute({ slug }) {
  const page = getServerReviewPage(slug);
  if (page) permanentRedirect(`/servers/${page.slug}`);

  const server = await getServerRecordBySlug(slug);
  if (server) permanentRedirect(`/servers/${server.slug}`);
  notFound();
}
