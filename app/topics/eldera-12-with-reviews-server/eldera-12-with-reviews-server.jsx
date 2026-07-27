import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-with-reviews-server');
}

export default function Eldera12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-with-reviews-server" />;
}
