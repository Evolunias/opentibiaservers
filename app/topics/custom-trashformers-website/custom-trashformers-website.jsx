import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-website');
}

export default function CustomTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-website" />;
}
