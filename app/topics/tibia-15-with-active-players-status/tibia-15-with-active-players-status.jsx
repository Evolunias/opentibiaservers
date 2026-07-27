import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-status');
}

export default function Tibia15WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-status" />;
}
