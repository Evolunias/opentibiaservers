import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-pvp-server');
}

export default function Ameria11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-pvp-server" />;
}
