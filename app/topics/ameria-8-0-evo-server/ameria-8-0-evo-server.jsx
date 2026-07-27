import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-evo-server');
}

export default function Ameria80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-evo-server" />;
}
