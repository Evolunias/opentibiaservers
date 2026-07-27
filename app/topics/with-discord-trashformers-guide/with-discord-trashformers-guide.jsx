import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-guide');
}

export default function WithDiscordTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-guide" />;
}
