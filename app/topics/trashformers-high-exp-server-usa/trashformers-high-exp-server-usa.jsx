import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-usa');
}

export default function TrashformersHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-usa" />;
}
