import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-guide');
}

export default function OfficialTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-guide" />;
}
