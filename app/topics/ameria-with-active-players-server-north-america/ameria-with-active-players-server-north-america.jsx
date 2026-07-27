import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-north-america');
}

export default function AmeriaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-north-america" />;
}
