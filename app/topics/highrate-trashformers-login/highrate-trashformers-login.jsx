import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-login');
}

export default function HighrateTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-login" />;
}
