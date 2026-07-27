import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-north-america');
}

export default function TrashformersLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-north-america" />;
}
