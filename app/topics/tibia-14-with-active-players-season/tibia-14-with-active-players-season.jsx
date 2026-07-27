import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-season');
}

export default function Tibia14WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-season" />;
}
