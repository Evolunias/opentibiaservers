import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-canada-servers');
}

export default function TrashformersCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-canada-servers" />;
}
