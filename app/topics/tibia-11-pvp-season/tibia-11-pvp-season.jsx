import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-season');
}

export default function Tibia11PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-season" />;
}
