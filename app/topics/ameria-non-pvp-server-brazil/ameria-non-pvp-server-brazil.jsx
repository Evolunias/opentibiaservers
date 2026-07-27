import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-brazil');
}

export default function AmeriaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-brazil" />;
}
