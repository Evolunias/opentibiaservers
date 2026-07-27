import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-custom-map-discord');
}

export default function Tibia100CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-custom-map-discord" />;
}
