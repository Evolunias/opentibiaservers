import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-discord');
}

export default function Tibia86PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-discord" />;
}
