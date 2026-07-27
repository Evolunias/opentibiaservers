import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-alternatives');
}

export default function TrashformersAlternativesKeywordPage() {
  return <StaticKeywordPage slug="trashformers-alternatives" />;
}
