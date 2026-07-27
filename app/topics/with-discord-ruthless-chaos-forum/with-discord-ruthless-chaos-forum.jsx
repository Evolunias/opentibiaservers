import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-forum');
}

export default function WithDiscordRuthlessChaosForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-forum" />;
}
