import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-real-map-discord');
}

export default function Tibia854RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-real-map-discord" />;
}
