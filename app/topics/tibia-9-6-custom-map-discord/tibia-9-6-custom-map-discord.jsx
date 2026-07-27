import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-discord');
}

export default function Tibia96CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-discord" />;
}
