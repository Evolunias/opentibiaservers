import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-season');
}

export default function Tibia772NonPvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-season" />;
}
