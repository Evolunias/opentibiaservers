import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-real-map-discord');
}

export default function Tibia772RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-real-map-discord" />;
}
