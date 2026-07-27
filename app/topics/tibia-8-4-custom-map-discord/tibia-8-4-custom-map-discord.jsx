import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-custom-map-discord');
}

export default function Tibia84CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-custom-map-discord" />;
}
