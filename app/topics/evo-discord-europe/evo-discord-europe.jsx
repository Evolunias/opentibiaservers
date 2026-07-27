import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-europe');
}

export default function EvoDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-europe" />;
}
