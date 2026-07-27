import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-enforced-discord');
}

export default function Tibia13PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-enforced-discord" />;
}
