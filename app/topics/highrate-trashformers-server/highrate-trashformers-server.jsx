import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-server');
}

export default function HighrateTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-server" />;
}
