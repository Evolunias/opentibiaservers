import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-usa');
}

export default function WithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-usa" />;
}
