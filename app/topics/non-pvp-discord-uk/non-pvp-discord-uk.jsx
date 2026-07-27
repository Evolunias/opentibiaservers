import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-uk');
}

export default function NonPvpDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-uk" />;
}
