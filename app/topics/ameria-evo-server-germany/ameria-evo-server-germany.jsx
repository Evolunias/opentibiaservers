import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-germany');
}

export default function AmeriaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-germany" />;
}
