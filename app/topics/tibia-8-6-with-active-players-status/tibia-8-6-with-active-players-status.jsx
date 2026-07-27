import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-active-players-status');
}

export default function Tibia86WithActivePlayersStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-active-players-status" />;
}
