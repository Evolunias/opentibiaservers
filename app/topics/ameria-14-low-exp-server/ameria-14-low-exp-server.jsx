import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-low-exp-server');
}

export default function Ameria14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-low-exp-server" />;
}
