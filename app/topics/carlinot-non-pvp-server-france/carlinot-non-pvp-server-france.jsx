import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-france');
}

export default function CarlinotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-france" />;
}
