import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-germany');
}

export default function WithDiscordServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-germany" />;
}
