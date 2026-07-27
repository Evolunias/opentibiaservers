import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-server');
}

export default function TrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-server" />;
}
