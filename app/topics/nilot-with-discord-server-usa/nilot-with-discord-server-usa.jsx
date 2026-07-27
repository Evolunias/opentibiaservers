import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-usa');
}

export default function NilotWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-usa" />;
}
