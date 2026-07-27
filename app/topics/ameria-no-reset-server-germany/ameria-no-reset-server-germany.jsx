import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-no-reset-server-germany');
}

export default function AmeriaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-no-reset-server-germany" />;
}
