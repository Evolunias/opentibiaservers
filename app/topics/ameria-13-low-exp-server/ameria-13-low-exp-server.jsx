import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-low-exp-server');
}

export default function Ameria13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-low-exp-server" />;
}
