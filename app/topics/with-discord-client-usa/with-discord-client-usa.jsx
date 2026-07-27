import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-usa');
}

export default function WithDiscordClientUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-usa" />;
}
