import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-germany');
}

export default function WithDiscordForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-germany" />;
}
