import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-usa');
}

export default function TrashformersBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-usa" />;
}
