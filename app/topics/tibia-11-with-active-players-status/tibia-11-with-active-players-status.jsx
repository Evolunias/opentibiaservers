import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-status');
}

export default function Tibia11WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-status" />;
}
