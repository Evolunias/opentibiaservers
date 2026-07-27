import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-north-america');
}

export default function AmeriaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-north-america" />;
}
