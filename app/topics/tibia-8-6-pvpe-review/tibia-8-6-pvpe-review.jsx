import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvpe-review');
}

export default function Tibia86PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvpe-review" />;
}
