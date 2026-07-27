import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-status');
}

export default function TrashformersStatusKeywordPage() {
  return <StaticKeywordPage slug="trashformers-status" />;
}
