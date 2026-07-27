import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-poland-server');
}

export default function TrashformersPolandServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-poland-server" />;
}
