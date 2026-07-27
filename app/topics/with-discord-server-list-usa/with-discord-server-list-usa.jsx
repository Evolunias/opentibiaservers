import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-usa');
}

export default function WithDiscordServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-usa" />;
}
