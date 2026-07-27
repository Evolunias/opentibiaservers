import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-france');
}

export default function CarlinotRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-france" />;
}
