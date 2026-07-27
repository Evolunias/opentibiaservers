import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-with-reviews-server');
}

export default function Eldera15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-with-reviews-server" />;
}
