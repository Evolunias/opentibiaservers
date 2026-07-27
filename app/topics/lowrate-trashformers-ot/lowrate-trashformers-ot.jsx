import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-ot');
}

export default function LowrateTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-ot" />;
}
