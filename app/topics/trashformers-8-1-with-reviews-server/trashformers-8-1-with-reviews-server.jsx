import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-with-reviews-server');
}

export default function Trashformers81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-with-reviews-server" />;
}
