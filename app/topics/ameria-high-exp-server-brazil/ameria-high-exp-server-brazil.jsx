import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-brazil');
}

export default function AmeriaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-brazil" />;
}
