import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-season');
}

export default function Tibia15NonPvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-season" />;
}
