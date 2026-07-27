import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-evo-server');
}

export default function Ameria14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-evo-server" />;
}
