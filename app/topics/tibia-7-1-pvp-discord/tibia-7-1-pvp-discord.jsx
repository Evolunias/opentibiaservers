import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-discord');
}

export default function Tibia71PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-discord" />;
}
