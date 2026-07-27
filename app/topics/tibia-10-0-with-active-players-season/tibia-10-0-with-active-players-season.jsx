import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-active-players-season');
}

export default function Tibia100WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-active-players-season" />;
}
