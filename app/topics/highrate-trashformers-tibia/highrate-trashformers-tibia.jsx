import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-tibia');
}

export default function HighrateTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-tibia" />;
}
