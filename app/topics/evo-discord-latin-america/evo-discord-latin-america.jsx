import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-latin-america');
}

export default function EvoDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-latin-america" />;
}
