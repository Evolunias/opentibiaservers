import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-brazil');
}

export default function AmeriaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-brazil" />;
}
