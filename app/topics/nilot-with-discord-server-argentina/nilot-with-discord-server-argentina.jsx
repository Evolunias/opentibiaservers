import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-argentina');
}

export default function NilotWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-argentina" />;
}
