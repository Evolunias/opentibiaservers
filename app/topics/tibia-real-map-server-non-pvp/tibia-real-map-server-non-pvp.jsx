import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-non-pvp');
}

export default function TibiaRealMapServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-non-pvp" />;
}
