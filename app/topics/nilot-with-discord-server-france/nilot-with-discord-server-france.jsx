import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-france');
}

export default function NilotWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-france" />;
}
