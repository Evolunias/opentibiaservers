import { notFound, permanentRedirect } from 'next/navigation';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getExactMatchPageData } from '@/lib/exact-match-page-data';
import { getServerReviewPage } from '@/lib/server-review-pages';

export async function generateMetadata({ params }) {
  const page = getServerReviewPage(params.slug) || getExactMatchPageData(params.slug);
  return page ? buildArticleMetadata(page) : {};
}

export default async function ServerSlugPage({ params }) {
  const exactMatchPage = getExactMatchPageData(params.slug);
  if (exactMatchPage) {
    permanentRedirect(exactMatchPage.path || `/${params.slug}`);
  }

  const page = getServerReviewPage(params.slug);
  if (!page) notFound();
  return <CuratedGuideArticle page={page} />;
}
