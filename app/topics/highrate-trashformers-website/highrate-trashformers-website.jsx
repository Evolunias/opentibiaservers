import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-website');
}

export default function HighrateTrashformersWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-website" />;
}
