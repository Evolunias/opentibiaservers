import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-sweden');
}

export default function AmeriaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-sweden" />;
}
