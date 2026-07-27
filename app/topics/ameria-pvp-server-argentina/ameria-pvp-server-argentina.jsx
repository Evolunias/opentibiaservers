import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-argentina');
}

export default function AmeriaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-argentina" />;
}
