import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-review');
}

export default function Tibia12RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-review" />;
}
