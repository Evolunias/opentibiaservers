import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-pvp-server');
}

export default function Ameria15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-pvp-server" />;
}
