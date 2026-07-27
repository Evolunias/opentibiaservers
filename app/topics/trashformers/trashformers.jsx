import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers');
}

export default function TrashformersKeywordPage() {
  return <StaticKeywordPage slug="trashformers" />;
}
