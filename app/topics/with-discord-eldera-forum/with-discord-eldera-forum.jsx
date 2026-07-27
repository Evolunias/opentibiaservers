import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-forum');
}

export default function WithDiscordElderaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-forum" />;
}
