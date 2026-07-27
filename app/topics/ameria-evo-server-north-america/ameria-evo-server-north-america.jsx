import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-north-america');
}

export default function AmeriaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-north-america" />;
}
