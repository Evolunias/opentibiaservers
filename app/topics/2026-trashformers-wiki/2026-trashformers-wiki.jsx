import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-trashformers-wiki');
}

export default function Keyword2026TrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-trashformers-wiki" />;
}
