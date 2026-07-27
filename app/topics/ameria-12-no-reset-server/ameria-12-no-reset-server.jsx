import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-no-reset-server');
}

export default function Ameria12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-no-reset-server" />;
}
