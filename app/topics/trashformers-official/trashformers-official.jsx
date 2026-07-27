import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-official');
}

export default function TrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="trashformers-official" />;
}
