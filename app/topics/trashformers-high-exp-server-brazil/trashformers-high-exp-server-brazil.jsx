import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-brazil');
}

export default function TrashformersHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-brazil" />;
}
