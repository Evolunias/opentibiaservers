import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-high-exp-server');
}

export default function Ameria11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-high-exp-server" />;
}
