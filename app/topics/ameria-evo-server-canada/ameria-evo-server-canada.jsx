import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-canada');
}

export default function AmeriaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-canada" />;
}
