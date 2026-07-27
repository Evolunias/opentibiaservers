import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-real-map-review');
}

export default function Tibia86RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-real-map-review" />;
}
