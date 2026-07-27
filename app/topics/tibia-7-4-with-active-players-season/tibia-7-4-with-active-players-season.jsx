import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-active-players-season');
}

export default function Tibia74WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-active-players-season" />;
}
