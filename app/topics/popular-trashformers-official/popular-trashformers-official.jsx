import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-official');
}

export default function PopularTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-official" />;
}
