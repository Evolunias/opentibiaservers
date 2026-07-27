import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-forum');
}

export default function WithDiscordEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-forum" />;
}
