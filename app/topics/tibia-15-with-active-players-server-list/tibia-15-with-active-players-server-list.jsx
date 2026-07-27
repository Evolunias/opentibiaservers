import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-server-list');
}

export default function Tibia15WithActivePlayersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-server-list" />;
}
