import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-discord');
}

export default function Tibia14PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-discord" />;
}
