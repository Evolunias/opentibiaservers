import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-argentina-servers');
}

export default function TrashformersArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-argentina-servers" />;
}
