import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-evo-servers');
}

export default function Ameria80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-evo-servers" />;
}
