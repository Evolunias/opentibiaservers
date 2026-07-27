import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-non-pvp-server');
}

export default function Ameria15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-non-pvp-server" />;
}
