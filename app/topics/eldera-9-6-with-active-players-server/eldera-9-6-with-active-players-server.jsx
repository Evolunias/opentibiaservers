import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-with-active-players-server');
}

export default function Eldera96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-with-active-players-server" />;
}
