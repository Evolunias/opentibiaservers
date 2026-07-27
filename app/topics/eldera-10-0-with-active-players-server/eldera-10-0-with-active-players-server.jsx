import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-with-active-players-server');
}

export default function Eldera100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-with-active-players-server" />;
}
