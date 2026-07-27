import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-latin-america');
}

export default function AmeriaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-latin-america" />;
}
