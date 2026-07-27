import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-forum');
}

export default function WithDiscordMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-forum" />;
}
