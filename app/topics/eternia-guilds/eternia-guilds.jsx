import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-guilds');
}

export default function EterniaGuildsKeywordPage() {
  return <StaticKeywordPage slug="eternia-guilds" />;
}
