import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-poland');
}

export default function CarlinotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-poland" />;
}
