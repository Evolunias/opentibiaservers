import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-98-non-pvp-server');
}

export default function Ameria1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-98-non-pvp-server" />;
}
