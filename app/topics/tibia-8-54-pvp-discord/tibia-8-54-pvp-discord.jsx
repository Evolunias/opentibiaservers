import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-discord');
}

export default function Tibia854PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-discord" />;
}
