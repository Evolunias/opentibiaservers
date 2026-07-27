import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-season');
}

export default function Tibia12PvpEnforcedSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-season" />;
}
