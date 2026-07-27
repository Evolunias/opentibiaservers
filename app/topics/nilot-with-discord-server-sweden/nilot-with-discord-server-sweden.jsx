import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-discord-server-sweden');
}

export default function NilotWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-discord-server-sweden" />;
}
