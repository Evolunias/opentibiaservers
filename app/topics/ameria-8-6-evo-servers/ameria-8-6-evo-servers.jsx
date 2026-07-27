import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-evo-servers');
}

export default function Ameria86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-evo-servers" />;
}
