import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-evo-servers');
}

export default function Ameria772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-evo-servers" />;
}
