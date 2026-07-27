import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-latin-america');
}

export default function EvoleraWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-latin-america" />;
}
