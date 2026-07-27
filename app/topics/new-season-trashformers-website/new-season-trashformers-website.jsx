import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-website');
}

export default function NewSeasonTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-website" />;
}
