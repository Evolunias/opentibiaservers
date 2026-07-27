import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-usa');
}

export default function NonPvpDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-usa" />;
}
