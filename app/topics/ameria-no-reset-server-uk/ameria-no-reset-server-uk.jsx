import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-uk');
}

export default function AmeriaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-uk" />;
}
