import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-canada-server');
}

export default function TrashformersCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-canada-server" />;
}
