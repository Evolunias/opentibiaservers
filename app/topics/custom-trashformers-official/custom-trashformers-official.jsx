import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-official');
}

export default function CustomTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-official" />;
}
