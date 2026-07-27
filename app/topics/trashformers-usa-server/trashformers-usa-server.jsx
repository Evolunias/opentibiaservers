import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-usa-server');
}

export default function TrashformersUsaServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-usa-server" />;
}
