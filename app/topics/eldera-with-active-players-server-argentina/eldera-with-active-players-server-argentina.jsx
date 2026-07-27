import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-argentina');
}

export default function ElderaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-argentina" />;
}
