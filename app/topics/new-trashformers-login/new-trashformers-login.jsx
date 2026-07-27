import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-login');
}

export default function NewTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-login" />;
}
