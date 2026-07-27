import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-argentina');
}

export default function PvpEnforcedDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-argentina" />;
}
