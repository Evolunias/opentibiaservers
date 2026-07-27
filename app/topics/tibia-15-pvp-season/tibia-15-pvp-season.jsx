import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-season');
}

export default function Tibia15PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-season" />;
}
