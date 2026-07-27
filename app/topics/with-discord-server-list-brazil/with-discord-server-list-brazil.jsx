import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-brazil');
}

export default function WithDiscordServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-brazil" />;
}
