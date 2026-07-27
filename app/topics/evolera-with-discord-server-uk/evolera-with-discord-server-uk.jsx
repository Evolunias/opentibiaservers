import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-uk');
}

export default function EvoleraWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-uk" />;
}
