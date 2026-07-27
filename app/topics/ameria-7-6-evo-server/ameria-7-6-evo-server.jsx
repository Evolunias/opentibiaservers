import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-evo-server');
}

export default function Ameria76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-evo-server" />;
}
