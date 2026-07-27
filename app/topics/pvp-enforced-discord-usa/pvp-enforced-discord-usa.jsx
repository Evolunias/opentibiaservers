import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-usa');
}

export default function PvpEnforcedDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-usa" />;
}
