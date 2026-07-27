import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-season');
}

export default function Tibia100PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-season" />;
}
