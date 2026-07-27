import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-latin-america');
}

export default function NilotWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-latin-america" />;
}
