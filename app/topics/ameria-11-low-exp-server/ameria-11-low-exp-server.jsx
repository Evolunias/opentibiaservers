import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-low-exp-server');
}

export default function Ameria11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-low-exp-server" />;
}
