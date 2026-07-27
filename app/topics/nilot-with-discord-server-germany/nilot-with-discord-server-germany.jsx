import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-germany');
}

export default function NilotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-germany" />;
}
