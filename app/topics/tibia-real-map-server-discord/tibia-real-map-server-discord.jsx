import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-discord');
}

export default function TibiaRealMapServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-discord" />;
}
