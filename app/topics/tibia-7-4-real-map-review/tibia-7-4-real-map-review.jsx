import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-real-map-review');
}

export default function Tibia74RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-real-map-review" />;
}
