import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-status');
}

export default function Tibia13WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-status" />;
}
