import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-active-players-status');
}

export default function Tibia96WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-active-players-status" />;
}
