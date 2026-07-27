import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-with-reviews-server');
}

export default function Realesta15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-with-reviews-server" />;
}
