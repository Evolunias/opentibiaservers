import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-argentina');
}

export default function AmeriaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-argentina" />;
}
