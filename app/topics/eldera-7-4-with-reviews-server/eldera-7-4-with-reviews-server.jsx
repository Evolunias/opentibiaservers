import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-with-reviews-server');
}

export default function Eldera74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-with-reviews-server" />;
}
