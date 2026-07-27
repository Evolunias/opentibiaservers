import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-brazil');
}

export default function EvoDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-brazil" />;
}
