import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-with-reviews-server');
}

export default function Realesta96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-with-reviews-server" />;
}
