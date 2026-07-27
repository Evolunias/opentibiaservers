import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-discord');
}

export default function Tibia100PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-discord" />;
}
