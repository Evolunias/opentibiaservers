import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-review');
}

export default function Tibia11PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-review" />;
}
