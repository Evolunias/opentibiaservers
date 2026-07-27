import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-poland-servers');
}

export default function TrashformersPolandServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-poland-servers" />;
}
