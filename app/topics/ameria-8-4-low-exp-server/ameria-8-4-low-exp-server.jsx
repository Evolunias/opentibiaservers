import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-low-exp-server');
}

export default function Ameria84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-low-exp-server" />;
}
