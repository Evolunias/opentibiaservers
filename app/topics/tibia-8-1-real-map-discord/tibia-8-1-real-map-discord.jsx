import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-real-map-discord');
}

export default function Tibia81RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-real-map-discord" />;
}
