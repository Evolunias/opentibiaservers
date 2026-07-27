import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-high-exp-server');
}

export default function Ameria100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-high-exp-server" />;
}
