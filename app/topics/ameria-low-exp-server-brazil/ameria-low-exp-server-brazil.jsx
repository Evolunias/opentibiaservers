import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-low-exp-server-brazil');
}

export default function AmeriaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-low-exp-server-brazil" />;
}
