import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-brazil');
}

export default function CarlinotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-brazil" />;
}
