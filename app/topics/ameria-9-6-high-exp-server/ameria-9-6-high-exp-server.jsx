import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-high-exp-server');
}

export default function Ameria96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-high-exp-server" />;
}
