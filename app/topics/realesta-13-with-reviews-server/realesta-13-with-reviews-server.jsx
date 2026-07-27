import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-with-reviews-server');
}

export default function Realesta13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-with-reviews-server" />;
}
