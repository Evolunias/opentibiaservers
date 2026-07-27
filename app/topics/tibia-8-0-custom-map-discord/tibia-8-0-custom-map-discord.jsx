import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-discord');
}

export default function Tibia80CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-discord" />;
}
