import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-brazil');
}

export default function AmeriaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-brazil" />;
}
