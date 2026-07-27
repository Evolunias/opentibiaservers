import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-high-exp-server');
}

export default function Ameria12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-high-exp-server" />;
}
