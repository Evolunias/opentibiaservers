import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-wiki');
}

export default function NoResetTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-wiki" />;
}
