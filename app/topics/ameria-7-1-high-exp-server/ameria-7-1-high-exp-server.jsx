import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-high-exp-server');
}

export default function Ameria71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-high-exp-server" />;
}
