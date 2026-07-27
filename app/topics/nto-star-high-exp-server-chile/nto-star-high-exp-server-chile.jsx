import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-chile');
}

export default function NtoStarHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-chile" />;
}
