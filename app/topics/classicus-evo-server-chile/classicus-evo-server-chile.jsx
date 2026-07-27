import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-chile');
}

export default function ClassicusEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-chile" />;
}
