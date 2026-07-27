import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fresh-start-server-chile');
}

export default function EmpirebrFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fresh-start-server-chile" />;
}
