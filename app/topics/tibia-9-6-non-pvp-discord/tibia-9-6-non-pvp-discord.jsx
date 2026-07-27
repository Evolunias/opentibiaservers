import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-non-pvp-discord');
}

export default function Tibia96NonPvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-non-pvp-discord" />;
}
