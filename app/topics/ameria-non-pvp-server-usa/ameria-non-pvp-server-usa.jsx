import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-usa');
}

export default function AmeriaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-usa" />;
}
