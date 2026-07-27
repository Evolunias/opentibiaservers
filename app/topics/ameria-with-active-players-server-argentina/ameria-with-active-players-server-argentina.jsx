import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-argentina');
}

export default function AmeriaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-argentina" />;
}
