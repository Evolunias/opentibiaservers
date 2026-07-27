import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-latin-america');
}

export default function CarlinotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-latin-america" />;
}
