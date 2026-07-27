import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-with-active-players-server');
}

export default function Realesta13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-with-active-players-server" />;
}
