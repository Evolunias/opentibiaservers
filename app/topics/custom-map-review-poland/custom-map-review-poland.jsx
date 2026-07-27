import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-poland');
}

export default function CustomMapReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-poland" />;
}
