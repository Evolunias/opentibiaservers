import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-poland');
}

export default function NilotWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-poland" />;
}
