import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-review');
}

export default function Tibia80PvpeReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-review" />;
}
