import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-review');
}

export default function Tibia11RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-review" />;
}
