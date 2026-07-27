import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-argentina-server');
}

export default function TrashformersArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-argentina-server" />;
}
