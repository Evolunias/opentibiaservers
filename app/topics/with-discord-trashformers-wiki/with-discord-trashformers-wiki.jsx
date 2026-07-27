import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-trashformers-wiki');
}

export default function WithDiscordTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-trashformers-wiki" />;
}
