import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-evo-server');
}

export default function Ameria71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-evo-server" />;
}
