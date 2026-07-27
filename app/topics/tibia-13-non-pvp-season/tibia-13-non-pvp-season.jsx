import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-season');
}

export default function Tibia13NonPvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-season" />;
}
