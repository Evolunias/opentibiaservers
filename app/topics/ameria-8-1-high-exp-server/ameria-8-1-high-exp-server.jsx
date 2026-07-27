import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-high-exp-server');
}

export default function Ameria81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-high-exp-server" />;
}
