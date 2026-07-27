import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-review');
}

export default function Tibia74PvpEnforcedReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-review" />;
}
