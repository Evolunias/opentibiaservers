import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-discord');
}

export default function Tibia13PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-discord" />;
}
