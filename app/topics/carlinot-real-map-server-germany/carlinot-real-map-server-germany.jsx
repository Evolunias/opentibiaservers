import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-germany');
}

export default function CarlinotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-germany" />;
}
