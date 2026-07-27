import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-forum');
}

export default function WithDiscordRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-forum" />;
}
