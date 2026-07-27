import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-canada');
}

export default function CustomMapReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-canada" />;
}
