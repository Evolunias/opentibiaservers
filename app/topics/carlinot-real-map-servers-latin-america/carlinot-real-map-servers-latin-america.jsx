import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-latin-america');
}

export default function CarlinotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-latin-america" />;
}
