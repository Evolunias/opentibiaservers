import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-germany-server');
}

export default function TrashformersGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-germany-server" />;
}
