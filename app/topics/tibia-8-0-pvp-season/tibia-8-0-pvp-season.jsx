import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-season');
}

export default function Tibia80PvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-season" />;
}
