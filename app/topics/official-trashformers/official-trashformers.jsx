import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers');
}

export default function OfficialTrashformersKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers" />;
}
