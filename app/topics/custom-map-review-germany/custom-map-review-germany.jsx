import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-germany');
}

export default function CustomMapReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-germany" />;
}
