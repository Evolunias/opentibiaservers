import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-active-players-server-list');
}

export default function Tibia86WithActivePlayersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-active-players-server-list" />;
}
