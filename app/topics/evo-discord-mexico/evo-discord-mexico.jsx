import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-mexico');
}

export default function EvoDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-mexico" />;
}
