import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-website');
}

export default function OldSchoolTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-website" />;
}
