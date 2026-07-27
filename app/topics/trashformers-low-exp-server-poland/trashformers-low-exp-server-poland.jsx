import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-poland');
}

export default function TrashformersLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-poland" />;
}
