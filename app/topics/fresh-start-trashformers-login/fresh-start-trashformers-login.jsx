import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-login');
}

export default function FreshStartTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-login" />;
}
