import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-brazil');
}

export default function NilotWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-brazil" />;
}
