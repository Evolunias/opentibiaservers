import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-website');
}

export default function OfficialTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-website" />;
}
