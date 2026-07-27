import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-high-exp-server');
}

export default function Ameria74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-high-exp-server" />;
}
