import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-discord');
}

export default function Tibia76PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-discord" />;
}
