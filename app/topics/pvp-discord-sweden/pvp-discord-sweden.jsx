import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-sweden');
}

export default function PvpDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-sweden" />;
}
