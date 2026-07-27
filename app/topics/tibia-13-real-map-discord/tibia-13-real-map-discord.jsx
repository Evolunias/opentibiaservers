import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-discord');
}

export default function Tibia13RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-discord" />;
}
