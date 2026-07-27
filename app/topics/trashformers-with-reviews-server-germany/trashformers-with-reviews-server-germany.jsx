import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-germany');
}

export default function TrashformersWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-germany" />;
}
