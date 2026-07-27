import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-client');
}

export default function NewTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-client" />;
}
