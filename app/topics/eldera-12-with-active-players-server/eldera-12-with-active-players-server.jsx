import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-with-active-players-server');
}

export default function Eldera12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-with-active-players-server" />;
}
