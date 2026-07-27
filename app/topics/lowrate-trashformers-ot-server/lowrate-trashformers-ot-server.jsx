import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-ot-server');
}

export default function LowrateTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-ot-server" />;
}
