import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-discord');
}

export default function Tibia74PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-discord" />;
}
