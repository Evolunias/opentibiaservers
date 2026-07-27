import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-low-exp-server');
}

export default function Ameria74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-low-exp-server" />;
}
