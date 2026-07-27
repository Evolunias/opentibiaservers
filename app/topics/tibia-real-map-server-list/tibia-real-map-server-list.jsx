import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-list');
}

export default function TibiaRealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-list" />;
}
