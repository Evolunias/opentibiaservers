import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-non-pvp-server');
}

export default function Ameria14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-non-pvp-server" />;
}
