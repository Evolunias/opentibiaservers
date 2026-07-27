import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-uk');
}

export default function NilotWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-uk" />;
}
