import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-with-active-players-server');
}

export default function Eldera854WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-with-active-players-server" />;
}
