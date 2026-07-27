import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-evo-server-chile');
}

export default function TrashformersEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-evo-server-chile" />;
}
