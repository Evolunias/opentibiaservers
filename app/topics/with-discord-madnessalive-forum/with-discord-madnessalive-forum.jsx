import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-forum');
}

export default function WithDiscordMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-forum" />;
}
