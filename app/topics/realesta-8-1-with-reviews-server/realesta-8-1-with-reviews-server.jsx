import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-with-reviews-server');
}

export default function Realesta81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-with-reviews-server" />;
}
