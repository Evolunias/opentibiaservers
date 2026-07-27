import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-france');
}

export default function AmeriaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-france" />;
}
