import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-non-pvp-season');
}

export default function Tibia71NonPvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-non-pvp-season" />;
}
