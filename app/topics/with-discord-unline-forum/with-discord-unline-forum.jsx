import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-forum');
}

export default function WithDiscordUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-forum" />;
}
