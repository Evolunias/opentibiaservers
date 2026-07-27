import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-official');
}

export default function BestTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-official" />;
}
