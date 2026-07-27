import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-forum');
}

export default function WithDiscordCanobForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-forum" />;
}
