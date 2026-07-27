import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-forum');
}

export default function WithDiscordAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-forum" />;
}
