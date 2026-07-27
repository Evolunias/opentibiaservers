import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-review');
}

export default function Tibia13CustomMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-review" />;
}
