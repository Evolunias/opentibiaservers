import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-uk');
}

export default function CarlinotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-uk" />;
}
