import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-france');
}

export default function CarlinotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-france" />;
}
