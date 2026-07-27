import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-discord');
}

export default function Tibia12CustomMapDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-discord" />;
}
