import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-discord');
}

export default function Tibia12PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-discord" />;
}
