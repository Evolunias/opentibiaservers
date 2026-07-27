import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-germany-servers');
}

export default function TrashformersGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-germany-servers" />;
}
