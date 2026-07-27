import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-france');
}

export default function RubinotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-france" />;
}
