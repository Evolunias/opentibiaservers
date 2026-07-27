import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-season');
}

export default function Tibia76WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-season" />;
}
