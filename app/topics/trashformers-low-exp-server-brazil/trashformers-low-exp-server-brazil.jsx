import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-brazil');
}

export default function TrashformersLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-brazil" />;
}
