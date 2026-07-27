import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-servers-usa');
}

export default function AmeriaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-servers-usa" />;
}
