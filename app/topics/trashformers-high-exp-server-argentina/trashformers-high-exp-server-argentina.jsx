import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-argentina');
}

export default function TrashformersHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-argentina" />;
}
