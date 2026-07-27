import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-evo-servers');
}

export default function Ameria71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-evo-servers" />;
}
