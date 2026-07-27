import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-forum');
}

export default function WithDiscordClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-forum" />;
}
