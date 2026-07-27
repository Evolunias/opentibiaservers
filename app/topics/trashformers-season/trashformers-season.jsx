import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-season');
}

export default function TrashformersSeasonKeywordPage() {
  return <StaticKeywordPage slug="trashformers-season" />;
}
