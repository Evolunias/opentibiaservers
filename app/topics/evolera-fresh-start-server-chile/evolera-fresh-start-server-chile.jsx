import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-chile');
}

export default function EvoleraFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-chile" />;
}
