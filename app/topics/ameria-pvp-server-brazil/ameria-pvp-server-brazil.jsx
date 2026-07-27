import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-brazil');
}

export default function AmeriaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-brazil" />;
}
