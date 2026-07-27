import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-forum');
}

export default function WithDiscordThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-forum" />;
}
