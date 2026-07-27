import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-argentina');
}

export default function CustomMapReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-argentina" />;
}
