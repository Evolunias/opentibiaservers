import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fresh-start-server-chile');
}

export default function ArcaniarlFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fresh-start-server-chile" />;
}
