import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-custom-map-review');
}

export default function Tibia854CustomMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-custom-map-review" />;
}
