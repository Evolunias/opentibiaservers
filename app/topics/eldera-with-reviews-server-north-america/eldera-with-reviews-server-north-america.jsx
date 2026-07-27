import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-north-america');
}

export default function ElderaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-north-america" />;
}
