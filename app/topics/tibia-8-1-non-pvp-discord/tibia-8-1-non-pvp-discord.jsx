import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-non-pvp-discord');
}

export default function Tibia81NonPvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-non-pvp-discord" />;
}
