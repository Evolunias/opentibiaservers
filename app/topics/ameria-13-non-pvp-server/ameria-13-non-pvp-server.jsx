import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-non-pvp-server');
}

export default function Ameria13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-non-pvp-server" />;
}
