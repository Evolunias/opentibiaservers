import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-discord');
}

export default function Tibia12PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-discord" />;
}
