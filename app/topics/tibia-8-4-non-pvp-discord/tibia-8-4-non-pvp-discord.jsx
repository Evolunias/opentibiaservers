import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-non-pvp-discord');
}

export default function Tibia84NonPvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-non-pvp-discord" />;
}
