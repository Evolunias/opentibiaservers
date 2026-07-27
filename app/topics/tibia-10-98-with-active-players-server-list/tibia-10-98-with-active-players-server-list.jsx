import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-active-players-server-list');
}

export default function Tibia1098WithActivePlayersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-active-players-server-list" />;
}
