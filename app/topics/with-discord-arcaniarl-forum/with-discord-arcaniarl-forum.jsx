import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-forum');
}

export default function WithDiscordArcaniarlForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-forum" />;
}
