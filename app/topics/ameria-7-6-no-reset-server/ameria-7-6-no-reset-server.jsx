import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-no-reset-server');
}

export default function Ameria76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-no-reset-server" />;
}
