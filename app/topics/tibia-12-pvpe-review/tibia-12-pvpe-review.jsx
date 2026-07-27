import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-review');
}

export default function Tibia12PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-review" />;
}
