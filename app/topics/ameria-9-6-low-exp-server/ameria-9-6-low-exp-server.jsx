import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-low-exp-server');
}

export default function Ameria96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-low-exp-server" />;
}
