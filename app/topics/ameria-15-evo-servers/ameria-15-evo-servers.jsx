import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-evo-servers');
}

export default function Ameria15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-evo-servers" />;
}
