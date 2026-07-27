import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-non-pvp-server');
}

export default function Ameria772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-non-pvp-server" />;
}
