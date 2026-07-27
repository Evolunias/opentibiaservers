import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-non-pvp-server');
}

export default function Ameria74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-non-pvp-server" />;
}
