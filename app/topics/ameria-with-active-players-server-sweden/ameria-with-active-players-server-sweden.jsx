import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-sweden');
}

export default function AmeriaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-sweden" />;
}
