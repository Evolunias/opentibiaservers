import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-active-players-server-list');
}

export default function Tibia74WithActivePlayersServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-active-players-server-list" />;
}
