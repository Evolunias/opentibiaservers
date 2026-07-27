import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-argentina');
}

export default function TrashformersLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-argentina" />;
}
