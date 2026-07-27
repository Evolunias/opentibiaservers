import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-54-non-pvp-server');
}

export default function Ameria854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-54-non-pvp-server" />;
}
