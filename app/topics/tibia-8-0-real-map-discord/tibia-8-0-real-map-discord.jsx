import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-real-map-discord');
}

export default function Tibia80RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-real-map-discord" />;
}
