import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-chile');
}

export default function NtoStarLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-chile" />;
}
