import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-non-pvp-server-chile');
}

export default function TrashformersNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-non-pvp-server-chile" />;
}
