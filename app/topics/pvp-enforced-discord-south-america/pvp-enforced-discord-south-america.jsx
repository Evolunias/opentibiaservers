import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-south-america');
}

export default function PvpEnforcedDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-south-america" />;
}
