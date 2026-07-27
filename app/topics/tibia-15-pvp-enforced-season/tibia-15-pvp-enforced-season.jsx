import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-season');
}

export default function Tibia15PvpEnforcedSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-season" />;
}
