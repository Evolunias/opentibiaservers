import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-no-reset-server');
}

export default function Ameria13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-no-reset-server" />;
}
