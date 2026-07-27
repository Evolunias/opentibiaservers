import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-season');
}

export default function Tibia12WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-season" />;
}
