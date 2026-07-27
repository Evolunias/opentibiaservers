import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-chile');
}

export default function EmpirebrRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-chile" />;
}
