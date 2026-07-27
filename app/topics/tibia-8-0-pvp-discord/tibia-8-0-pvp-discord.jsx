import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-discord');
}

export default function Tibia80PvpDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-discord" />;
}
