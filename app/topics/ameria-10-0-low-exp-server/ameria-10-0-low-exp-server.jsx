import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-low-exp-server');
}

export default function Ameria100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-low-exp-server" />;
}
