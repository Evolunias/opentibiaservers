import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-with-active-players-server');
}

export default function Eldera15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-with-active-players-server" />;
}
