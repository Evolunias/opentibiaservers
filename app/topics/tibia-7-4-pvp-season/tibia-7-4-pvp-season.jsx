import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-season');
}

export default function Tibia74PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-season" />;
}
