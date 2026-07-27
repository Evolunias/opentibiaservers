import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvpe-review');
}

export default function Tibia1098PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvpe-review" />;
}
