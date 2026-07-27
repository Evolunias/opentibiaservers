import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-europe');
}

export default function CarlinotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-europe" />;
}
