import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-active-players-season');
}

export default function Tibia84WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-active-players-season" />;
}
