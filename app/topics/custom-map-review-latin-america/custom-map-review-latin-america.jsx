import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-latin-america');
}

export default function CustomMapReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-latin-america" />;
}
