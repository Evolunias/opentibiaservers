import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-poland');
}

export default function TrashformersHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-poland" />;
}
