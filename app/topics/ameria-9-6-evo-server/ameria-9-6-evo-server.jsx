import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-evo-server');
}

export default function Ameria96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-evo-server" />;
}
