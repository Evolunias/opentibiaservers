import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-high-exp-server');
}

export default function Ameria14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-high-exp-server" />;
}
