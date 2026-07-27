import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-forum');
}

export default function WithDiscordKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-forum" />;
}
