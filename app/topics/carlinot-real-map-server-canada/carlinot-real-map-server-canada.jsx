import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-canada');
}

export default function CarlinotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-canada" />;
}
