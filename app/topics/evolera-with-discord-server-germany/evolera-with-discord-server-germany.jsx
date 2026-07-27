import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-germany');
}

export default function EvoleraWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-germany" />;
}
