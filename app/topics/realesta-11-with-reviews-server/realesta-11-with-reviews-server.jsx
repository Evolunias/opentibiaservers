import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-with-reviews-server');
}

export default function Realesta11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-with-reviews-server" />;
}
