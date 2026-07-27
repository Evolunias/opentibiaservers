import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-mexico');
}

export default function AmeriaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-mexico" />;
}
