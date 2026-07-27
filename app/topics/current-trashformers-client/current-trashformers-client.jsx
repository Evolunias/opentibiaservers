import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-client');
}

export default function CurrentTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-client" />;
}
