import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-mexico');
}

export default function NilotWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-mexico" />;
}
