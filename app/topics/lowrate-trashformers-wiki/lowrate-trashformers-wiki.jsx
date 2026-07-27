import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-wiki');
}

export default function LowrateTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-wiki" />;
}
