import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-argentina');
}

export default function NonPvpDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-argentina" />;
}
