import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-usa');
}

export default function AmeriaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-usa" />;
}
