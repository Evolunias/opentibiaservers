import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-review');
}

export default function Tibia12PvpEnforcedReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-review" />;
}
