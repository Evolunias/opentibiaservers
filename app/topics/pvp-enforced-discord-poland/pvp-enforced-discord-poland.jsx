import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-poland');
}

export default function PvpEnforcedDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-poland" />;
}
