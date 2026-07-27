import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-poland');
}

export default function WithDiscordServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-poland" />;
}
