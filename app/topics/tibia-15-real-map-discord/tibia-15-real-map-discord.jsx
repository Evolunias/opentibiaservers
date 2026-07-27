import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-discord');
}

export default function Tibia15RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-discord" />;
}
