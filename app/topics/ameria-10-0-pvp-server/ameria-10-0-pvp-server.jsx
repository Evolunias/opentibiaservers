import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-pvp-server');
}

export default function Ameria100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-pvp-server" />;
}
