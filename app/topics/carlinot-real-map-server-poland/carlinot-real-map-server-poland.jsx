import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-poland');
}

export default function CarlinotRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-poland" />;
}
