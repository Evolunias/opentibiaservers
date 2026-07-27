import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-usa');
}

export default function CustomMapReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-usa" />;
}
