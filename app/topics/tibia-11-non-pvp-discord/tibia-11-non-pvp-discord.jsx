import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-discord');
}

export default function Tibia11NonPvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-discord" />;
}
