import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-real-map');
}

export default function TibiaCustomServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-real-map" />;
}
