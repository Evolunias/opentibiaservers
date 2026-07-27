import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-with-reviews-server');
}

export default function Trashformers13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-with-reviews-server" />;
}
