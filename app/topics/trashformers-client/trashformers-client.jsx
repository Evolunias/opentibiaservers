import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-client');
}

export default function TrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="trashformers-client" />;
}
