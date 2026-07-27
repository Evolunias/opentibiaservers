import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-usa');
}

export default function AmeriaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-usa" />;
}
