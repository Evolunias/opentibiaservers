import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-servers-brazil');
}

export default function AmeriaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-servers-brazil" />;
}
