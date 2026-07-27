import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-brazil');
}

export default function ElderaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-brazil" />;
}
