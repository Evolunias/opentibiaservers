import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-wiki');
}

export default function PopularTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-wiki" />;
}
