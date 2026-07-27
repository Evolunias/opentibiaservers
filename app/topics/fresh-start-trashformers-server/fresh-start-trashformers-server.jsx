import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-server');
}

export default function FreshStartTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-server" />;
}
