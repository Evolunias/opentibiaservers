import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-sweden');
}

export default function CustomMapReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-sweden" />;
}
