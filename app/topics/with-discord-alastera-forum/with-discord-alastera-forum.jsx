import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-forum');
}

export default function WithDiscordAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-forum" />;
}
