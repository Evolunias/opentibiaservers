import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-no-reset-server');
}

export default function Ameria11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-no-reset-server" />;
}
