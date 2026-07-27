import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-poland');
}

export default function EvoleraWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-poland" />;
}
