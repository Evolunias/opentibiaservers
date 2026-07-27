import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-guilds');
}

export default function EvoleraGuildsKeywordPage() {
  return <StaticKeywordPage slug="evolera-guilds" />;
}
