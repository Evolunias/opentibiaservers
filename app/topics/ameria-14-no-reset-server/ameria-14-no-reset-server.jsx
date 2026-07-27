import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-no-reset-server');
}

export default function Ameria14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-no-reset-server" />;
}
