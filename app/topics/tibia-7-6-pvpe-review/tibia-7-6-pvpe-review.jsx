import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-review');
}

export default function Tibia76PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-review" />;
}
