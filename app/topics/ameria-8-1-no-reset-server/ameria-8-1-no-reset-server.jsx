import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-no-reset-server');
}

export default function Ameria81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-no-reset-server" />;
}
