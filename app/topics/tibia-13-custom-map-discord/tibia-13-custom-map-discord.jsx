import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-discord');
}

export default function Tibia13CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-discord" />;
}
