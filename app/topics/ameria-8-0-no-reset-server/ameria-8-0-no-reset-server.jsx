import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-no-reset-server');
}

export default function Ameria80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-no-reset-server" />;
}
