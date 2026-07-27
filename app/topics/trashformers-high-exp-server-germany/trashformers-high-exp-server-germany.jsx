import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-germany');
}

export default function TrashformersHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-germany" />;
}
