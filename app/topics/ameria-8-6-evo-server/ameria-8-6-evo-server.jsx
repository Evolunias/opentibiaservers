import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-evo-server');
}

export default function Ameria86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-evo-server" />;
}
