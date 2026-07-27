import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-pvp');
}

export default function TibiaRealMapServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-pvp" />;
}
