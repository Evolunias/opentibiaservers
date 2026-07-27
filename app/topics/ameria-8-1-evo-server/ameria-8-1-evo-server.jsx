import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-evo-server');
}

export default function Ameria81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-evo-server" />;
}
