import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-evo-server');
}

export default function Ameria12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-evo-server" />;
}
