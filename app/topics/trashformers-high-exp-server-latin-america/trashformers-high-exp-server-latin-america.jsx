import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-latin-america');
}

export default function TrashformersHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-latin-america" />;
}
