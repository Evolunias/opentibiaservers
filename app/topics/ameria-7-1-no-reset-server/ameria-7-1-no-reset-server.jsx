import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-no-reset-server');
}

export default function Ameria71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-no-reset-server" />;
}
