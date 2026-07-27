import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-non-pvp-server');
}

export default function Ameria84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-non-pvp-server" />;
}
