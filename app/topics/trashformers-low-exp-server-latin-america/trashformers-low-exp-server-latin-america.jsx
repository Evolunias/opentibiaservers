import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-latin-america');
}

export default function TrashformersLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-latin-america" />;
}
