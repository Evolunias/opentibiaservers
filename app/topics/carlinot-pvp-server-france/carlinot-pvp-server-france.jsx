import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-france');
}

export default function CarlinotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-france" />;
}
