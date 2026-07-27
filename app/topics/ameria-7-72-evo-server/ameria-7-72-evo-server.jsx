import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-evo-server');
}

export default function Ameria772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-evo-server" />;
}
