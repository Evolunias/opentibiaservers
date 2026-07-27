import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-98-evo-server');
}

export default function Ameria1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-98-evo-server" />;
}
