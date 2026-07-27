import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-status');
}

export default function Tibia76WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-status" />;
}
