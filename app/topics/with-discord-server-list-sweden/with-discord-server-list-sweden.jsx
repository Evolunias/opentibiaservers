import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-sweden');
}

export default function WithDiscordServerListSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-sweden" />;
}
