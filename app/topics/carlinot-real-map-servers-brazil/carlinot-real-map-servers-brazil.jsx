import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-brazil');
}

export default function CarlinotRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-brazil" />;
}
