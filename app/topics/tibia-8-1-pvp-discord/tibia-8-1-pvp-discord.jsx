import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-discord');
}

export default function Tibia81PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-discord" />;
}
