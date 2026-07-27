import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-enforced-discord');
}

export default function Tibia84PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-enforced-discord" />;
}
