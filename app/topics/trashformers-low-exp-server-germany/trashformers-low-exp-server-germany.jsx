import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-germany');
}

export default function TrashformersLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-germany" />;
}
