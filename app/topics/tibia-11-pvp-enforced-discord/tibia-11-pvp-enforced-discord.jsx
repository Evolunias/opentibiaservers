import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-discord');
}

export default function Tibia11PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-discord" />;
}
