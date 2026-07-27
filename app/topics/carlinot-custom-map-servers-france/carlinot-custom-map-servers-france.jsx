import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-france');
}

export default function CarlinotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-france" />;
}
