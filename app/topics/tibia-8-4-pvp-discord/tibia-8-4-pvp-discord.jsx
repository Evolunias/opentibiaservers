import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-discord');
}

export default function Tibia84PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-discord" />;
}
