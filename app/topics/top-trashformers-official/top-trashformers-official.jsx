import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-official');
}

export default function TopTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-official" />;
}
