import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-high-exp-server');
}

export default function Ameria13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-high-exp-server" />;
}
