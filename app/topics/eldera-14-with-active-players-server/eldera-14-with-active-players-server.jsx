import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-with-active-players-server');
}

export default function Eldera14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-with-active-players-server" />;
}
