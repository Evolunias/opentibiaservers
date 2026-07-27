import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-sweden');
}

export default function NonPvpDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-sweden" />;
}
