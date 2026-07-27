import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-official');
}

export default function HighrateTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-official" />;
}
