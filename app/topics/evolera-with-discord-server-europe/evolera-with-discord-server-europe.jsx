import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-europe');
}

export default function EvoleraWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-europe" />;
}
