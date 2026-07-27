import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-review');
}

export default function Tibia13RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-review" />;
}
