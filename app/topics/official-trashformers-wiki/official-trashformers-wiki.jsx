import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-wiki');
}

export default function OfficialTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-wiki" />;
}
