import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-mexico');
}

export default function AmeriaPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-mexico" />;
}
