import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-non-pvp-server');
}

export default function Ameria96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-non-pvp-server" />;
}
