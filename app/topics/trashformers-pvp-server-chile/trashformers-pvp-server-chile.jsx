import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-server-chile');
}

export default function TrashformersPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-server-chile" />;
}
