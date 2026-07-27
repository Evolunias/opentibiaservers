import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-canada');
}

export default function CarlinotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-canada" />;
}
