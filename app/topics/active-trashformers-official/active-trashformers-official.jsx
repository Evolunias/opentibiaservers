import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-official');
}

export default function ActiveTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-official" />;
}
