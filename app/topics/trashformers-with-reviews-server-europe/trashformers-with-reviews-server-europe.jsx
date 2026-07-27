import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-europe');
}

export default function TrashformersWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-europe" />;
}
