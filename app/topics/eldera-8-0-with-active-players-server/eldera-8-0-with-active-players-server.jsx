import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-with-active-players-server');
}

export default function Eldera80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-with-active-players-server" />;
}
