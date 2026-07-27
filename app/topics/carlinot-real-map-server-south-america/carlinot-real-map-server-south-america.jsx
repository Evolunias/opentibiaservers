import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-server-south-america');
}

export default function CarlinotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-server-south-america" />;
}
