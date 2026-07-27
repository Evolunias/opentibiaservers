import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-high-exp-server-sweden');
}

export default function TrashformersHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-high-exp-server-sweden" />;
}
