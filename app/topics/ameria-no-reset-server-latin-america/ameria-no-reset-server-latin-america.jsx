import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-latin-america');
}

export default function AmeriaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-latin-america" />;
}
