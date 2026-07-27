import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-website');
}

export default function TrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="trashformers-website" />;
}
