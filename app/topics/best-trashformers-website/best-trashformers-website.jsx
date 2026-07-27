import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-website');
}

export default function BestTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-website" />;
}
