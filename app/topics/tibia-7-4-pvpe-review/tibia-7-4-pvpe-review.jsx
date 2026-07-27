import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-review');
}

export default function Tibia74PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-review" />;
}
