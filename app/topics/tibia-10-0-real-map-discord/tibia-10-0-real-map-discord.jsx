import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-discord');
}

export default function Tibia100RealMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-discord" />;
}
