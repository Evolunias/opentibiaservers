import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-high-exp-server');
}

export default function Ameria772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-high-exp-server" />;
}
