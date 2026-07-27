import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-discord');
}

export default function Tibia11CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-discord" />;
}
