import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-with-active-players-server');
}

export default function Eldera13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-with-active-players-server" />;
}
