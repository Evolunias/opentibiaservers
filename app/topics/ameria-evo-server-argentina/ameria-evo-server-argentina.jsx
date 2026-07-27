import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-argentina');
}

export default function AmeriaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-argentina" />;
}
