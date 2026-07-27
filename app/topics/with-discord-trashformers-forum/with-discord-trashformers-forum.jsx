import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-forum');
}

export default function WithDiscordTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-forum" />;
}
