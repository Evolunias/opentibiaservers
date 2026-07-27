import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-poland');
}

export default function TrashformersWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-poland" />;
}
