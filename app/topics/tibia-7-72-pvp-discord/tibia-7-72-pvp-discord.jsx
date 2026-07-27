import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-discord');
}

export default function Tibia772PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-discord" />;
}
