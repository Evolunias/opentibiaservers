import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-brazil');
}

export default function TrashformersBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-brazil" />;
}
