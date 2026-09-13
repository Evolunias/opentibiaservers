import { notFound, permanentRedirect } from 'next/navigation';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { buildOtServerCuratedPage } from '@/lib/otserver-curated-pages';
import { getServerExcerpt } from '@/lib/server-excerpts';
import { getServerReviewPage } from '@/lib/server-review-pages';
import { getServerRecordBySlug } from '@/lib/server-records';
import { buildSourceBackedServerProfile } from '@/lib/source-backed-server-profile';

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
  const livePage = buildSourceBackedServerProfile(buildOtServerCuratedPage(server));
  return buildArticleMetadata({ ...livePage, path: `/servers/${server.slug}` });
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
  const livePage = buildSourceBackedServerProfile(buildOtServerCuratedPage(server));
  return <CuratedGuideArticle page={{ ...livePage, path: `/servers/${server.slug}` }} />;
}

export async function LegacyServerRoute({ slug }) {
  const page = getServerReviewPage(slug);
  if (page) permanentRedirect(`/servers/${page.slug}`);

  const server = await getServerRecordBySlug(slug);
  if (server) permanentRedirect(`/servers/${server.slug}`);
  notFound();
}
