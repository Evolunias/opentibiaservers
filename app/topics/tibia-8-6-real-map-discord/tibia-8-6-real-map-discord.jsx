import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-real-map-discord');
}

export default function Tibia86RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-real-map-discord" />;
}
