import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers');
}

export default function WithDiscordTrashformersKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers" />;
}
