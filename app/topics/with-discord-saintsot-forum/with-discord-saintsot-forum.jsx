import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-forum');
}

export default function WithDiscordSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-forum" />;
}
