import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-france');
}

export default function AmeriaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-france" />;
}
