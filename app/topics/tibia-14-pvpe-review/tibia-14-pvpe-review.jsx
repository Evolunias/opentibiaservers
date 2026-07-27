import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-review');
}

export default function Tibia14PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-review" />;
}
