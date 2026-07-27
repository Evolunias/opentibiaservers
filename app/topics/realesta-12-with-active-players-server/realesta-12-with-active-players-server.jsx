import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-with-active-players-server');
}

export default function Realesta12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-with-active-players-server" />;
}
