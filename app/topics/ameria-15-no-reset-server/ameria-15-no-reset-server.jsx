import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-no-reset-server');
}

export default function Ameria15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-no-reset-server" />;
}
