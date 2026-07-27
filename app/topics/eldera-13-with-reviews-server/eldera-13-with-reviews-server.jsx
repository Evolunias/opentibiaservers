import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-with-reviews-server');
}

export default function Eldera13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-with-reviews-server" />;
}
