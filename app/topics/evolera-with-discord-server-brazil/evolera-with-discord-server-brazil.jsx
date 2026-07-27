import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-brazil');
}

export default function EvoleraWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-brazil" />;
}
