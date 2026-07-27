import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-website');
}

export default function ActiveTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-website" />;
}
