import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-low-exp-server-sweden');
}

export default function TrashformersLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-low-exp-server-sweden" />;
}
