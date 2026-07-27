import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-europe');
}

export default function AmeriaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-europe" />;
}
