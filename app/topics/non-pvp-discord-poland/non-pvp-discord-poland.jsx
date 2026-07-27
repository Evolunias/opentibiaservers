import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-poland');
}

export default function NonPvpDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-poland" />;
}
