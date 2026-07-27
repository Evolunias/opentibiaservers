import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-south-america');
}

export default function WithDiscordForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-south-america" />;
}
