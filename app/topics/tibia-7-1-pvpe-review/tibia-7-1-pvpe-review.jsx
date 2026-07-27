import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-review');
}

export default function Tibia71PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-review" />;
}
