import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-low-exp-server');
}

export default function Ameria15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-low-exp-server" />;
}
