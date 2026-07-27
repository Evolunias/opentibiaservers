import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-discord');
}

export default function Tibia74PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-discord" />;
}
