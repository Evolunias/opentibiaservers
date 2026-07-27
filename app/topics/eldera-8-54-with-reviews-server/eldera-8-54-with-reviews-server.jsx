import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-with-reviews-server');
}

export default function Eldera854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-with-reviews-server" />;
}
