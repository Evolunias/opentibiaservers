import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-with-active-players-server');
}

export default function Eldera11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-with-active-players-server" />;
}
