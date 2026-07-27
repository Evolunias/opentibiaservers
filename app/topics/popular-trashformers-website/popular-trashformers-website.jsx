import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-website');
}

export default function PopularTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-website" />;
}
