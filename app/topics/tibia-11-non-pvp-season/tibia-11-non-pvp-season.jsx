import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-season');
}

export default function Tibia11NonPvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-season" />;
}
