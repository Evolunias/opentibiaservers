import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-brazil');
}

export default function CustomMapReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-brazil" />;
}
