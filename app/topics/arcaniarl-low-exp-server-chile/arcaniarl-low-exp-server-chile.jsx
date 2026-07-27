import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-chile');
}

export default function ArcaniarlLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-chile" />;
}
