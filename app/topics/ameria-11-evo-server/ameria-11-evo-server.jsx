import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-evo-server');
}

export default function Ameria11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-evo-server" />;
}
