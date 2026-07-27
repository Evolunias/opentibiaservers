import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-evo-servers');
}

export default function Ameria14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-evo-servers" />;
}
