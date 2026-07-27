import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-north-america');
}

export default function OlderaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-north-america" />;
}
