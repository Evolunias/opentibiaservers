import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-north-america');
}

export default function CarlinotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-north-america" />;
}
