import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-evo-server');
}

export default function Ameria100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-evo-server" />;
}
