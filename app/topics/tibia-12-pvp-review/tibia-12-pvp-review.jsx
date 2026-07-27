import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-review');
}

export default function Tibia12PvpReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-review" />;
}
