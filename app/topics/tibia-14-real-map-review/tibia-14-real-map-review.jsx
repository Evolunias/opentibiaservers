import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-review');
}

export default function Tibia14RealMapReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-review" />;
}
