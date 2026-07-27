import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-server');
}

export default function TopTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-server" />;
}
