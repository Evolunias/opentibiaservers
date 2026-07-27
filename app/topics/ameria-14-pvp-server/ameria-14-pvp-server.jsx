import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-pvp-server');
}

export default function Ameria14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-pvp-server" />;
}
