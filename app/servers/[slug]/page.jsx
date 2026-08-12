import { notFound } from 'next/navigation';
import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getServerReviewPage } from '@/lib/server-review-pages';

export async function generateMetadata({ params }) {
  const page = getServerReviewPage(params.slug);
  return page ? buildArticleMetadata(page) : {};
}

export default async function ServerSlugPage({ params }) {
  const page = getServerReviewPage(params.slug);
  if (!page) notFound();
  return <CuratedGuideArticle page={page} />;
}
