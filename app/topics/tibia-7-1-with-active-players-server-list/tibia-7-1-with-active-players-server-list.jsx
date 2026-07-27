import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-active-players-server-list');
}

export default function Tibia71WithActivePlayersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-active-players-server-list" />;
}
