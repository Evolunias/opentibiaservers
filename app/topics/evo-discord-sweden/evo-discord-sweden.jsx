import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-sweden');
}

export default function EvoDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-sweden" />;
}
