import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-season');
}

export default function Tibia86PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-season" />;
}
