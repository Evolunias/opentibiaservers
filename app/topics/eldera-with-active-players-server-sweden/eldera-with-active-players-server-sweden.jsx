import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-active-players-server-sweden');
}

export default function ElderaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-active-players-server-sweden" />;
}
