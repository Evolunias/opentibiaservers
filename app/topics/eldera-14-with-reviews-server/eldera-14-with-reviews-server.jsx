import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-with-reviews-server');
}

export default function Eldera14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-with-reviews-server" />;
}
