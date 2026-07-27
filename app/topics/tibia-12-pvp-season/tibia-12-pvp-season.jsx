import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-season');
}

export default function Tibia12PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-season" />;
}
