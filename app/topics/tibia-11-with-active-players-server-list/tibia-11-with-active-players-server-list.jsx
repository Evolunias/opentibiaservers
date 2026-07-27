import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-server-list');
}

export default function Tibia11WithActivePlayersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-server-list" />;
}
