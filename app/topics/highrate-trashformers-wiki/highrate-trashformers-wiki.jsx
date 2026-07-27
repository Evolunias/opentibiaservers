import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-wiki');
}

export default function HighrateTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-wiki" />;
}
