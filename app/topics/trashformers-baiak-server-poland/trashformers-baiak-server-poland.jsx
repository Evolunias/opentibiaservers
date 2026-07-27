import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-poland');
}

export default function TrashformersBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-poland" />;
}
