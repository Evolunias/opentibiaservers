import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-germany');
}

export default function CarlinotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-germany" />;
}
