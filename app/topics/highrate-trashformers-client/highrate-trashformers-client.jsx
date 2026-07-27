import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-client');
}

export default function HighrateTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-client" />;
}
