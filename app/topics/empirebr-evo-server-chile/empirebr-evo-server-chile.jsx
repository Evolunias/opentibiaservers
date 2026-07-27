import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-chile');
}

export default function EmpirebrEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-chile" />;
}
