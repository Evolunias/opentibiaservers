import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-north-america');
}

export default function EvoleraWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-north-america" />;
}
