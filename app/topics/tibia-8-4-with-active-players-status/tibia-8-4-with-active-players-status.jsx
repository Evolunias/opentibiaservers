import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-active-players-status');
}

export default function Tibia84WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-active-players-status" />;
}
