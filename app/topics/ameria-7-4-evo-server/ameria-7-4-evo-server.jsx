import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-evo-server');
}

export default function Ameria74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-evo-server" />;
}
