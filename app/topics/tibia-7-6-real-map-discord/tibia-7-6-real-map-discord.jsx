import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-discord');
}

export default function Tibia76RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-discord" />;
}
