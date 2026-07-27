import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-with-active-players-server');
}

export default function Eldera772WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-with-active-players-server" />;
}
