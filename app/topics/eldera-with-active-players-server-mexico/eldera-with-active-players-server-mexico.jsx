import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-mexico');
}

export default function ElderaWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-mexico" />;
}
