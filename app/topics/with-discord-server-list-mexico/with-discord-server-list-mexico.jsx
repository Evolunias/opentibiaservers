import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-mexico');
}

export default function WithDiscordServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-mexico" />;
}
