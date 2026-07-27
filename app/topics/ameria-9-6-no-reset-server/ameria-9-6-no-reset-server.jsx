import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-no-reset-server');
}

export default function Ameria96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-no-reset-server" />;
}
