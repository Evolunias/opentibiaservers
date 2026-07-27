import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-season');
}

export default function Tibia11WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-season" />;
}
