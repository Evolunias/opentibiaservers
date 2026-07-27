import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-season');
}

export default function Tibia13PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-season" />;
}
