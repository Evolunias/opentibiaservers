import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-forum');
}

export default function WithDiscordOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-forum" />;
}
