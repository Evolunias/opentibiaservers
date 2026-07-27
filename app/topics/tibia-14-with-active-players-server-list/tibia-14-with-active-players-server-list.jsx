import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-server-list');
}

export default function Tibia14WithActivePlayersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-server-list" />;
}
