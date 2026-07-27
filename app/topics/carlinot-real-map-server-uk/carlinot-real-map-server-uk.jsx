import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-uk');
}

export default function CarlinotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-uk" />;
}
