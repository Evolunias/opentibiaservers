import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-evo-server');
}

export default function Ameria15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-evo-server" />;
}
