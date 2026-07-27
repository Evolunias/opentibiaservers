import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-open-tibia');
}

export default function HighrateTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-open-tibia" />;
}
