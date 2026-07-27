import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-with-active-players-server');
}

export default function Realesta15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-with-active-players-server" />;
}
