import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-discord');
}

export default function Tibia96PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-discord" />;
}
