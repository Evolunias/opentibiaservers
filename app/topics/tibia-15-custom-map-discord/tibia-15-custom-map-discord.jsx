import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-custom-map-discord');
}

export default function Tibia15CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-custom-map-discord" />;
}
