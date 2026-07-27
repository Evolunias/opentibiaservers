import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-active-players-season');
}

export default function Tibia80WithActivePlayersSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-active-players-season" />;
}
