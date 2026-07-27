import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-status');
}

export default function Tibia14WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-status" />;
}
