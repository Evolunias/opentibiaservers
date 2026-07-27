import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-low-exp-server');
}

export default function Ameria80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-low-exp-server" />;
}
