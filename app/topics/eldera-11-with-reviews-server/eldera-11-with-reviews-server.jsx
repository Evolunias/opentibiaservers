import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-with-reviews-server');
}

export default function Eldera11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-with-reviews-server" />;
}
