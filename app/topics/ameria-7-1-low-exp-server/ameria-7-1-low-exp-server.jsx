import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-low-exp-server');
}

export default function Ameria71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-low-exp-server" />;
}
