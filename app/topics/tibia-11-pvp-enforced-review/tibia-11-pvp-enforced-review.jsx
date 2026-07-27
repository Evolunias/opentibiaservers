import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-review');
}

export default function Tibia11PvpEnforcedReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-review" />;
}
