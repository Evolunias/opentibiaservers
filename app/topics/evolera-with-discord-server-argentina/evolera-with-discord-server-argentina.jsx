import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-argentina');
}

export default function EvoleraWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-argentina" />;
}
