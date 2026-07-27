import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-forum');
}

export default function WithDiscordShadowcoresForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-forum" />;
}
