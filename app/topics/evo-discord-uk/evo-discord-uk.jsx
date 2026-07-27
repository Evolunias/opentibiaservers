import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-uk');
}

export default function EvoDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-uk" />;
}
