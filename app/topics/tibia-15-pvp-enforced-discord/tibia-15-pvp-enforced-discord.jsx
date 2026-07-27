import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-discord');
}

export default function Tibia15PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-discord" />;
}
