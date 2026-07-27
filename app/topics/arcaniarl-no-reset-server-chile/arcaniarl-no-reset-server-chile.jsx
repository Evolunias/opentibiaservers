import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-chile');
}

export default function ArcaniarlNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-chile" />;
}
