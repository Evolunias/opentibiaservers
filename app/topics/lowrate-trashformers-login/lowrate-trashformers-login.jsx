import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-login');
}

export default function LowrateTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-login" />;
}
