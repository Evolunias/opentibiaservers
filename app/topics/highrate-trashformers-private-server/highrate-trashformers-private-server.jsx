import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-private-server');
}

export default function HighrateTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-private-server" />;
}
