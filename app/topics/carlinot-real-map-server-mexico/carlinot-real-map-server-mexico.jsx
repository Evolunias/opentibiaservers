import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-mexico');
}

export default function CarlinotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-mexico" />;
}
