import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-usa');
}

export default function ElderaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-usa" />;
}
