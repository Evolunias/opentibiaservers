import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-with-reviews-server');
}

export default function Trashformers11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-with-reviews-server" />;
}
