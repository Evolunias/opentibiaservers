import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-non-pvp-server');
}

export default function Ameria12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-non-pvp-server" />;
}
