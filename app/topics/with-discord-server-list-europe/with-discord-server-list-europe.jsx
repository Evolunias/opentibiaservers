import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-europe');
}

export default function WithDiscordServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-europe" />;
}
