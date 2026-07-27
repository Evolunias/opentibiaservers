import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-canada');
}

export default function AmeriaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-canada" />;
}
