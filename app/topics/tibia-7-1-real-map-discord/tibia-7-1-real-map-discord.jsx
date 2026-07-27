import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map-discord');
}

export default function Tibia71RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map-discord" />;
}
