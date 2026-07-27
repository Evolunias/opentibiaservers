import { notFound } from 'next/navigation';
import KeywordTopicArticle, { generateKeywordTopicMetadata } from '@/app/components/KeywordTopicArticle';
import { getKeywordPageBySlug } from '@/lib/keyword-pages';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  return generateKeywordTopicMetadata(params.slug);
}

export default function KeywordTopicPage({ params }) {
  const page = getKeywordPageBySlug(params.slug);
  if (!page) notFound();

  return <KeywordTopicArticle slug={params.slug} />;
}
