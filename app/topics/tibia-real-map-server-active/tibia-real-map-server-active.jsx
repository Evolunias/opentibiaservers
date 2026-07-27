import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-active');
}

export default function TibiaRealMapServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-active" />;
}
