import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-argentina');
}

export default function CarlinotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-argentina" />;
}
