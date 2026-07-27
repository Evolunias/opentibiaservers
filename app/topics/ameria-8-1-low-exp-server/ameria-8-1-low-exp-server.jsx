import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-low-exp-server');
}

export default function Ameria81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-low-exp-server" />;
}
