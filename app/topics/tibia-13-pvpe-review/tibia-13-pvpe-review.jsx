import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-review');
}

export default function Tibia13PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-review" />;
}
