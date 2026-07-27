import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-forum');
}

export default function WithDiscordTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-forum" />;
}
