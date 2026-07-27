import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-discord');
}

export default function Tibia74NonPvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-discord" />;
}
