import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-review');
}

export default function Tibia96CustomMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-review" />;
}
