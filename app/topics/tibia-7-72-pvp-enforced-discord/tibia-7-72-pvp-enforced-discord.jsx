import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-enforced-discord');
}

export default function Tibia772PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-enforced-discord" />;
}
