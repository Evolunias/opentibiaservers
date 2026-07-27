import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-website');
}

export default function FreshStartTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-website" />;
}
