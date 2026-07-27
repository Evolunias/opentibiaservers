import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-website');
}

export default function NewTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-website" />;
}
