import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-server');
}

export default function LowrateTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-server" />;
}
