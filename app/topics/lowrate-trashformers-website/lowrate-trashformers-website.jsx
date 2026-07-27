import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-website');
}

export default function LowrateTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-website" />;
}
