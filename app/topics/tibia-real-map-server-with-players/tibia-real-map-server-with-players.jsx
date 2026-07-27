import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-with-players');
}

export default function TibiaRealMapServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-with-players" />;
}
