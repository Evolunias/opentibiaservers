import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-france');
}

export default function CustomMapReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-france" />;
}
