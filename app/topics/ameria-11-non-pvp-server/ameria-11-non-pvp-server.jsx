import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-non-pvp-server');
}

export default function Ameria11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-non-pvp-server" />;
}
