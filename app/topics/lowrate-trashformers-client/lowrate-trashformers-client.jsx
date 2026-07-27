import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-client');
}

export default function LowrateTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-client" />;
}
