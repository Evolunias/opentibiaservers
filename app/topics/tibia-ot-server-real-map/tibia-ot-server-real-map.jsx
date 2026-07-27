import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-real-map');
}

export default function TibiaOtServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-real-map" />;
}
