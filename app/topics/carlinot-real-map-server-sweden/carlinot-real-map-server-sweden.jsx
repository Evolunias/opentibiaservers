import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-sweden');
}

export default function CarlinotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-sweden" />;
}
