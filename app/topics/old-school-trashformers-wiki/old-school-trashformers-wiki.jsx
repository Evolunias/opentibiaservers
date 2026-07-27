import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-wiki');
}

export default function OldSchoolTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-wiki" />;
}
