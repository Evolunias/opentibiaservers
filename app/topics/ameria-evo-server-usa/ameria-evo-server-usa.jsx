import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-usa');
}

export default function AmeriaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-usa" />;
}
