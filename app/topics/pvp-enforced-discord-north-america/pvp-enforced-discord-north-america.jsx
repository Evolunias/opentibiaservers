import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-north-america');
}

export default function PvpEnforcedDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-north-america" />;
}
