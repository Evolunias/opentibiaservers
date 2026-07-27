import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-usa-servers');
}

export default function TrashformersUsaServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-usa-servers" />;
}
