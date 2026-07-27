import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-brazil');
}

export default function AmeriaNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-brazil" />;
}
