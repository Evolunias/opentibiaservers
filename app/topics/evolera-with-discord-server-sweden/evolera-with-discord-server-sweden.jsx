import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-sweden');
}

export default function EvoleraWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-sweden" />;
}
