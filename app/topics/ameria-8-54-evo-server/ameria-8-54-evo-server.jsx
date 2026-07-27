import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-54-evo-server');
}

export default function Ameria854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-54-evo-server" />;
}
