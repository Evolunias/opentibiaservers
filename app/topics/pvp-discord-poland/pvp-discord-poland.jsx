import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-poland');
}

export default function PvpDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-poland" />;
}
