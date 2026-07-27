import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-season');
}

export default function Tibia11PvpEnforcedSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-season" />;
}
