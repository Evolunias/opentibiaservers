import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-review');
}

export default function Tibia15PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-review" />;
}
