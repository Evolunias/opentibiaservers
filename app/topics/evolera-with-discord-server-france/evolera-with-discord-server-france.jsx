import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-discord-server-france');
}

export default function EvoleraWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-discord-server-france" />;
}
