import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-no-reset-server');
}

export default function Ameria100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-no-reset-server" />;
}
