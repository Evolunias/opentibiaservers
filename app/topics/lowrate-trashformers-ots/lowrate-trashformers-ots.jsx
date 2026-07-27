import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-ots');
}

export default function LowrateTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-ots" />;
}
