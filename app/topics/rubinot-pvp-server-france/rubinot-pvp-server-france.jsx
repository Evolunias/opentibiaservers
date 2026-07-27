import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-france');
}

export default function RubinotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-france" />;
}
