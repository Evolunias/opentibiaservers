import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-baiak-server-chile');
}

export default function TrashformersBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-baiak-server-chile" />;
}
