import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-real-map-review');
}

export default function Tibia1098RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-real-map-review" />;
}
