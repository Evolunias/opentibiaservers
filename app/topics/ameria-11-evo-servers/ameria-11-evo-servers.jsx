import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-evo-servers');
}

export default function Ameria11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-evo-servers" />;
}
