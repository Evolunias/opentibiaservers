import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-brazil');
}

export default function ElderaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-brazil" />;
}
