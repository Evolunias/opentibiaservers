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
      path: `/${page.slug}`,
    });
    const excerpt = getServerExcerpt(page, { maxLength: 160 });
    return {
      ...metadata,
      description: excerpt || undefined,
      alternates: { canonical: `/${page.slug}` },
    };
  }

  const server = await getServerRecordBySlug(slug);
  if (!server) return {};
  const livePage = buildSourceBackedServerProfile(buildOtServerCuratedPage(server));
  return buildArticleMetadata({ ...livePage, path: `/${server.slug}` });
}

export default async function CanonicalServerRoute({ slug }) {
  const page = getServerReviewPage(slug);
  if (page) {
    if (page.slug !== slug) permanentRedirect(`/${page.slug}`);
    return <CuratedGuideArticle page={{ ...page, path: `/${page.slug}` }} />;
  }

  const server = await getServerRecordBySlug(slug);
  if (!server) notFound();
  if (server.slug !== slug) permanentRedirect(`/${server.slug}`);
  const livePage = buildSourceBackedServerProfile(buildOtServerCuratedPage(server));
  return <CuratedGuideArticle page={{ ...livePage, path: `/${server.slug}` }} />;
}

/** Kept for existing app/<slug>/page.jsx imports — renders at /name, no /servers redirect. */
export { default as LegacyServerRoute } from '@/app/components/ServerSlugPage';
