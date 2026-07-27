import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-usa');
}

export default function AmeriaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-usa" />;
}
