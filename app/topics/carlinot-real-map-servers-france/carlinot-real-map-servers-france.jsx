import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-france');
}

export default function CarlinotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-france" />;
}
