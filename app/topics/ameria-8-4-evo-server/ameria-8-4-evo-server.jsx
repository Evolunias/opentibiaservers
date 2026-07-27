import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-evo-server');
}

export default function Ameria84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-evo-server" />;
}
