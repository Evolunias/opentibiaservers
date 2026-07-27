import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-mexico');
}

export default function AmeriaNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-mexico" />;
}
