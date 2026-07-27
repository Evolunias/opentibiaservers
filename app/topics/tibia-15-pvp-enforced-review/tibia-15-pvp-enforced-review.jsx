import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-review');
}

export default function Tibia15PvpEnforcedReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-review" />;
}
