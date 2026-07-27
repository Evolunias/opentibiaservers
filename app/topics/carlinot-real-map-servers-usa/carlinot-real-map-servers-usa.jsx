import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-usa');
}

export default function CarlinotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-usa" />;
}
