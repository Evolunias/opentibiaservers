import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-poland');
}

export default function EvoDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-poland" />;
}
