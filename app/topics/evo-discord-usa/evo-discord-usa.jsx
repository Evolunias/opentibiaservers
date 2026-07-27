import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-usa');
}

export default function EvoDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-usa" />;
}
