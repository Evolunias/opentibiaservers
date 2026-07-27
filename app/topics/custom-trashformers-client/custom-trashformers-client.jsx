import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-client');
}

export default function CustomTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-client" />;
}
