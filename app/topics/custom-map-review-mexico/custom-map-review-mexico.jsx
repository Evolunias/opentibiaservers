import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-mexico');
}

export default function CustomMapReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-mexico" />;
}
