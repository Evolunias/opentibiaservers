import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-enforced-review');
}

export default function Tibia81PvpEnforcedReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-enforced-review" />;
}
