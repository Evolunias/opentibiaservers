import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-discord');
}

export default function Tibia14PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-discord" />;
}
