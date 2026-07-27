import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-europe');
}

export default function CarlinotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-europe" />;
}
