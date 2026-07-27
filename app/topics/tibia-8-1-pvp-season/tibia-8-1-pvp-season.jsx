import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-season');
}

export default function Tibia81PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-season" />;
}
