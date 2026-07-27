import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-evo-server');
}

export default function Ameria13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-evo-server" />;
}
