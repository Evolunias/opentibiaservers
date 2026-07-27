import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-south-america');
}

export default function CustomMapReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-south-america" />;
}
