import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-poland');
}

export default function WithDiscordForumPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-poland" />;
}
