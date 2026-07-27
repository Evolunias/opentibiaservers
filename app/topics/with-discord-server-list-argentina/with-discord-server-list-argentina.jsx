import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-argentina');
}

export default function WithDiscordServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-argentina" />;
}
