import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-chile');
}

export default function ClassickDrakoriaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-chile" />;
}
