import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-mexico');
}

export default function CarlinotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-mexico" />;
}
