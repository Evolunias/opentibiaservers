import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-discord');
}

export default function Tibia1098PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-discord" />;
}
