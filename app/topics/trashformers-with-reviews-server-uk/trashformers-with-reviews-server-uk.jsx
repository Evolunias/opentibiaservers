import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-uk');
}

export default function TrashformersWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-uk" />;
}
