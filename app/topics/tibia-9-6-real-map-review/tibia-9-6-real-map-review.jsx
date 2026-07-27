import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-review');
}

export default function Tibia96RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-review" />;
}
