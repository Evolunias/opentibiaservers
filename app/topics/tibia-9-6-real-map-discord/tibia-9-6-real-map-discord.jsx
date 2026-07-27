import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-discord');
}

export default function Tibia96RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-discord" />;
}
