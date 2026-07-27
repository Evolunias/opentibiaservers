import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-active-players-season');
}

export default function Tibia96WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-active-players-season" />;
}
