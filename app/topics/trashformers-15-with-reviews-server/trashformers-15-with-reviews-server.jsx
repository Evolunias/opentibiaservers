import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-with-reviews-server');
}

export default function Trashformers15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-with-reviews-server" />;
}
