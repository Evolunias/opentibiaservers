import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-register');
}

export default function TibiaRealMapServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-register" />;
}
