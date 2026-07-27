import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-enforced-discord');
}

export default function Tibia71PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-enforced-discord" />;
}
