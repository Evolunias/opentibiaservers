import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-enforced-review');
}

export default function Tibia854PvpEnforcedReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-enforced-review" />;
}
