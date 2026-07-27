import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-website');
}

export default function TopTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-website" />;
}
