import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-pvp-server');
}

export default function Ameria86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-pvp-server" />;
}
