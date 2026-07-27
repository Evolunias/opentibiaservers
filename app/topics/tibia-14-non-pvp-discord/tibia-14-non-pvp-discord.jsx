import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-discord');
}

export default function Tibia14NonPvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-discord" />;
}
