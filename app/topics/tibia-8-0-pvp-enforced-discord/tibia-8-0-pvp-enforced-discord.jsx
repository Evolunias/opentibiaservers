import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-enforced-discord');
}

export default function Tibia80PvpEnforcedDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-enforced-discord" />;
}
