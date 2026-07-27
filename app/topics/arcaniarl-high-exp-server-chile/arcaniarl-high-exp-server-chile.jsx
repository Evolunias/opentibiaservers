import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-chile');
}

export default function ArcaniarlHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-chile" />;
}
