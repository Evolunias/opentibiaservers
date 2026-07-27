import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-reviews');
}

export default function TrashformersReviewsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-reviews" />;
}
