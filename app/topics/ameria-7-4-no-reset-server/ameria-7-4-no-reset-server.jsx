import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-no-reset-server');
}

export default function Ameria74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-no-reset-server" />;
}
