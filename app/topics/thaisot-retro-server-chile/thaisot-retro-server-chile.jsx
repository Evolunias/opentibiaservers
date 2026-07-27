import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-chile');
}

export default function ThaisotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-chile" />;
}
