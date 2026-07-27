import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-discord');
}

export default function Tibia96PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-discord" />;
}
