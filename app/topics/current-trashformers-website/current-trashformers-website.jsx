import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-website');
}

export default function CurrentTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-website" />;
}
