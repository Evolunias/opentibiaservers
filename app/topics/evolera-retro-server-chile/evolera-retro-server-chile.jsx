import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-chile');
}

export default function EvoleraRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-chile" />;
}
