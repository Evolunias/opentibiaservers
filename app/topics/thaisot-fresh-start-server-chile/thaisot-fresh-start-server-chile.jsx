import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-chile');
}

export default function ThaisotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-chile" />;
}
