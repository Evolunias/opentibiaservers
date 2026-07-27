import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-argentina');
}

export default function AmeriaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-argentina" />;
}
