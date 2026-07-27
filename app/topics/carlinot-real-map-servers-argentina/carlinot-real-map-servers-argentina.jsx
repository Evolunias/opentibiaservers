import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-argentina');
}

export default function CarlinotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-argentina" />;
}
