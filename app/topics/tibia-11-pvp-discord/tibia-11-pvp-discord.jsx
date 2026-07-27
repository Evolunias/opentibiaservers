import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-discord');
}

export default function Tibia11PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-discord" />;
}
